
  describe("some-evil-spec=767", () => {
    it("evil-block-767", () => {
      window.evil_767 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  