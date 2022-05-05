
  describe("some-evil-spec=255", () => {
    it("evil-block-255", () => {
      window.evil_255 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  