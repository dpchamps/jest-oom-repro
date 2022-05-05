
  describe("some-evil-spec=751", () => {
    it("evil-block-751", () => {
      window.evil_751 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  