
  describe("some-evil-spec=8", () => {
    it("evil-block-8", () => {
      window.evil_8 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  