
  describe("some-evil-spec=863", () => {
    it("evil-block-863", () => {
      window.evil_863 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  