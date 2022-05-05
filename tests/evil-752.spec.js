
  describe("some-evil-spec=752", () => {
    it("evil-block-752", () => {
      window.evil_752 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  