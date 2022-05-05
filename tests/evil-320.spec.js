
  describe("some-evil-spec=320", () => {
    it("evil-block-320", () => {
      window.evil_320 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  