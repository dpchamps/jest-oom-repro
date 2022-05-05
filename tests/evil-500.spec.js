
  describe("some-evil-spec=500", () => {
    it("evil-block-500", () => {
      window.evil_500 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  