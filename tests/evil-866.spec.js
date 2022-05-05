
  describe("some-evil-spec=866", () => {
    it("evil-block-866", () => {
      window.evil_866 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  