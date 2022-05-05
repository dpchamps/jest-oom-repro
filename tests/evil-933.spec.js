
  describe("some-evil-spec=933", () => {
    it("evil-block-933", () => {
      window.evil_933 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  