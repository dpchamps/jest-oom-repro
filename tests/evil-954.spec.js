
  describe("some-evil-spec=954", () => {
    it("evil-block-954", () => {
      window.evil_954 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  