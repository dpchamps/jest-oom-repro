
  describe("some-evil-spec=674", () => {
    it("evil-block-674", () => {
      window.evil_674 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  