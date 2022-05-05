
  describe("some-evil-spec=100", () => {
    it("evil-block-100", () => {
      window.evil_100 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  