
  describe("some-evil-spec=317", () => {
    it("evil-block-317", () => {
      window.evil_317 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  