
  describe("some-evil-spec=994", () => {
    it("evil-block-994", () => {
      window.evil_994 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  