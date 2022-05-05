
  describe("some-evil-spec=832", () => {
    it("evil-block-832", () => {
      window.evil_832 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  