
  describe("some-evil-spec=373", () => {
    it("evil-block-373", () => {
      window.evil_373 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  