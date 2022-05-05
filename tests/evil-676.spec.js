
  describe("some-evil-spec=676", () => {
    it("evil-block-676", () => {
      window.evil_676 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  