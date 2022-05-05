
  describe("some-evil-spec=716", () => {
    it("evil-block-716", () => {
      window.evil_716 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  