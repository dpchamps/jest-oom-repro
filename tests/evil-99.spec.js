
  describe("some-evil-spec=99", () => {
    it("evil-block-99", () => {
      window.evil_99 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  