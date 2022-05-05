
  describe("some-evil-spec=192", () => {
    it("evil-block-192", () => {
      window.evil_192 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  