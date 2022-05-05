
  describe("some-evil-spec=417", () => {
    it("evil-block-417", () => {
      window.evil_417 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  